'use client'
import React, {useState, useEffect} from 'react'
import useSWR from 'swr'
import DOMPurify from 'dompurify'

interface FormData {
  title: string
  type: string
  url: string
  content: string
}

interface Errors {
  title: string
  type: string
  url: string
  content: string
  fetchError: string
}

const fetcher = (url: string) =>
  fetch(url, {
    mode: 'cors',
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => {
    if (r.status === 404) {
      return null
    }

    return r.json()
  })

export default function UpdateArticle({params}: {params: {slug: string}}) {
  const api = process.env.NEXT_PUBLIC_API_URL

  // fetch detail
  const {data, isLoading, error} = useSWR(
    Number(params.slug) && Number(params.slug) > 0
      ? `${process.env.NEXT_PUBLIC_API_URL}/article/detail/${params.slug}`
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  // State for form loading
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    type: 'text',
    url: '',
    content: '',
  })

  // State for validation errors
  const [errors, setErrors] = useState<Errors>({
    title: '',
    type: '',
    url: '',
    content: '',
    fetchError: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Sanitize user input
    const sanitizedTitle = DOMPurify.sanitize(formData.title)
    const sanitizedType = DOMPurify.sanitize(formData.type)
    const sanitizedUrl = DOMPurify.sanitize(formData.url)
    const sanitizedContent = DOMPurify.sanitize(formData.content)

    // Validation
    const newErrors: Errors = {
      title:
        sanitizedTitle.trim().length < 10
          ? 'Title must be at least 10 characters'
          : '',
      type:
        sanitizedType !== 'text' && sanitizedType !== 'video'
          ? 'The chosen option is not valid. Please select a valid option from the type'
          : '',
      url: !/^(https?|ftp):\/\/(-\.)?([^\s\/?\.#-]+\.?)+([^\s]*)$/.test(
        sanitizedUrl.trim(),
      )
        ? 'Invalid URL. Please enter a valid URL including the protocol (e.g., http:// or https://).'
        : '',
      content:
        sanitizedContent.trim().length < 10
          ? 'Content must be at least 10 characters'
          : '',
      fetchError: '',
    }

    await setErrors(newErrors)

    if (
      !newErrors.title &&
      !newErrors.type &&
      !newErrors.url &&
      !newErrors.content
    ) {
      // Construct json payload
      const requestBody: FormData = {
        title: sanitizedTitle,
        url: sanitizedUrl,
        content: sanitizedContent,
        type: sanitizedType,
      }

      try {
        setLoading(true)
        // Fetch data from your authentication endpoint
        const response = await fetch(`${api}/article/update/${params.slug}`, {
          mode: 'cors',
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(requestBody),
        })

        const jsonData = await response.json()

        if (response.ok) {
          // Handle successful add new article
          window.scrollTo({top: 20, behavior: 'smooth'})
          setSuccessMessage(
            jsonData.message || 'Successfully updated new article',
          )
        } else {
          throw new Error(jsonData.message || 'Error fetch data')
        }
      } catch (error) {
        // Handle article error
        const newErrors: Errors = {
          title: '',
          url: '',
          content: '',
          type: '',
          fetchError: String(error),
        }

        setErrors(newErrors)
      } finally {
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    // set default state from API
    if (data && !isLoading && formData.title === '') {
      setFormData({
        title: data.title,
        type: data.type,
        url: data.url,
        content: data.content,
      })
    }
  }, [data, isLoading])

  if ((!data && !isLoading) || !Number(params.slug)) {
    return (
      <div className="grid">
        <div className="flex flex-col">Error Slug Not Found</div>
      </div>
    )
  }

  return (
    <div className="grid">
      <div className="flex flex-col">
        {isLoading ? (
          <div className="flex h-screen items-center justify-center bg-white">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
          </div>
        ) : (
          <>
            {successMessage !== '' && (
              <div className="flex w-full border-l-6 border-[#34D399] bg-[#34D399] bg-opacity-[15%] px-7 py-8 mb-6 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
                <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#34D399]">
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2984 0.826822L15.2868 0.811827L15.2741 0.797751C14.9173 0.401867 14.3238 0.400754 13.9657 0.794406L5.91888 9.45376L2.05667 5.2868C1.69856 4.89287 1.10487 4.89389 0.747996 5.28987C0.417335 5.65675 0.417335 6.22337 0.747996 6.59026L0.747959 6.59029L0.752701 6.59541L4.86742 11.0348C5.14445 11.3405 5.52858 11.5 5.89581 11.5C6.29242 11.5 6.65178 11.3355 6.92401 11.035L15.2162 2.11161C15.5833 1.74452 15.576 1.18615 15.2984 0.826822Z"
                      fill="white"
                      stroke="white"
                    ></path>
                  </svg>
                </div>
                <div className="w-full">
                  <h5 className="text-lg font-semibold text-black dark:text-[#34D399] ">
                    {successMessage}
                  </h5>
                </div>
              </div>
            )}
            {/* <!-- Contact Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Add New Article Form
                </h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="p-6.5">
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Title <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Article title.."
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Type
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      >
                        <option value="text">Text</option>
                        <option value="video">Video</option>
                      </select>
                      <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                        <svg
                          className="fill-current"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                              fill=""
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      URL <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="url"
                      value={formData.url}
                      onChange={handleInputChange}
                      placeholder="Enter article url.."
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Content
                    </label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Type your content"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    ></textarea>
                  </div>

                  <button
                    disabled={loading}
                    type="submit"
                    className="flex w-full justify-center rounded bg-red-300 p-3 font-medium text-white"
                  >
                    {loading ? 'Loading..' : 'Submit'}
                  </button>
                  {(errors.title !== '' ||
                    errors.url !== '' ||
                    errors.type !== '' ||
                    errors.content !== '') && (
                    <div className="w-full bg-red-100 p-2 rounded mb-4 mt-4">
                      <div className="text-red-500 text-xs">{errors.title}</div>
                      <div className="text-red-500 text-xs">{errors.type}</div>
                      <div className="text-red-500 text-xs">{errors.url}</div>
                      <div className="text-red-500 text-xs">
                        {errors.content}
                      </div>
                      <div className="text-red-500 text-xs capitalize">
                        {errors.fetchError}
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
