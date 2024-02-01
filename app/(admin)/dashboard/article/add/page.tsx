'use client'
import React, {useState} from 'react'
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

export default function AddArticle() {
  const api = process.env.NEXT_PUBLIC_API_URL

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
    console.log(sanitizedUrl.trim())
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
        const response = await fetch(`${api}/article/add`, {
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
          window.scrollTo(0, 0)
          setFormData({
            title: '',
            type: 'text',
            url: '',
            content: '',
          })
          setSuccessMessage(
            jsonData.message || 'Successfully added new article',
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
  return (
    <div className="grid">
      <div className="flex flex-col">
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
        {/* <!-- Alerts Item --> */}
        {/* <div className="flex border-l-6 border-[#FFA70B] bg-[#FFA70B] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
          <div className="mr-5 flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFA70B] bg-opacity-30">
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.50493 16H17.5023C18.6204 16 19.3413 14.9018 18.8354 13.9735L10.8367 0.770573C10.2852 -0.256858 8.70677 -0.256858 8.15528 0.770573L0.156617 13.9735C-0.334072 14.8998 0.386764 16 1.50493 16ZM10.7585 12.9298C10.7585 13.6155 10.2223 14.1433 9.45583 14.1433C8.6894 14.1433 8.15311 13.6155 8.15311 12.9298V12.9015C8.15311 12.2159 8.6894 11.688 9.45583 11.688C10.2223 11.688 10.7585 12.2159 10.7585 12.9015V12.9298ZM8.75236 4.01062H10.2548C10.6674 4.01062 10.9127 4.33826 10.8671 4.75288L10.2071 10.1186C10.1615 10.5049 9.88572 10.7455 9.50142 10.7455C9.11929 10.7455 8.84138 10.5028 8.79579 10.1186L8.13574 4.75288C8.09449 4.33826 8.33984 4.01062 8.75236 4.01062Z"
                fill="#FBBF24"
              ></path>
            </svg>
          </div>
          <div className="w-full">
            <h5 className="mb-3 text-lg font-semibold text-[#9D5425]">
              Attention needed
            </h5>
            <p className="leading-relaxed text-[#D0915C]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when
            </p>
          </div>
        </div> */}

        {/* <!-- Alerts Item --> */}
        {/* <div className="flex w-full border-l-6 border-[#34D399] bg-[#34D399] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
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
            <h5 className="mb-3 text-lg font-semibold text-black dark:text-[#34D399] ">
              Message Sent Successfully
            </h5>
            <p className="text-base leading-relaxed text-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div> */}
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
                type="submit"
                className="flex w-full justify-center rounded bg-red-300 p-3 font-medium text-white"
              >
                Submit
              </button>
              {(errors.title !== '' ||
                errors.url !== '' ||
                errors.type !== '' ||
                errors.content !== '') && (
                <div className="w-full bg-red-100 p-2 rounded mb-4 mt-4">
                  <div className="text-red-500 text-xs">{errors.title}</div>
                  <div className="text-red-500 text-xs">{errors.type}</div>
                  <div className="text-red-500 text-xs">{errors.url}</div>
                  <div className="text-red-500 text-xs">{errors.content}</div>
                  <div className="text-red-500 text-xs capitalize">
                    {errors.fetchError}
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
