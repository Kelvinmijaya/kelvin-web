'use client'
import {Fragment, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import useSWR from 'swr'

interface OpenDialog {
  category: string
  isOpen: boolean
  id: number
}

interface MyNextComponentProps {
  mutate: any
  openDialog: OpenDialog
  setOpen: (args: OpenDialog) => void
}

const fetcher = (url: string) =>
  fetch(url, {
    mode: 'cors',
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json())

const PopupDialog: React.FC<MyNextComponentProps> = ({
  mutate,
  openDialog,
  setOpen,
}) => {
  // State for form loading
  const [loading, setLoading] = useState(false)

  // fetch detail
  const {data, error} = useSWR(
    openDialog.id > 0 && openDialog.category === 'detail'
      ? `${process.env.NEXT_PUBLIC_API_URL}/article/detail/${openDialog.id}`
      : null,
    fetcher,
  )

  const deleteArticle = async (id: number) => {
    if (id < 1 && openDialog.category !== 'delete') {
      return
    }

    try {
      setLoading(true)
      // Fetch data from your authentication endpoint
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/article/delete/${id}`,
        {
          mode: 'cors',
          method: 'DELETE',
          credentials: 'include',
        },
      )

      if (response.ok) {
        // Handle successful delete
        mutate()
        setOpen({
          category: '',
          isOpen: false,
          id: -1,
        })
      } else {
        console.error('Fail to fetch')
      }
    } catch (error) {
      // Handle login error
      console.error('Fail to fetch')
    } finally {
      setLoading(false)
    }
  }

  const closeButtonRef = useRef(null)

  return (
    <Transition.Root show={openDialog.isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={closeButtonRef}
        onClose={() => {
          setOpen({
            category: '',
            isOpen: false,
            id: -1,
          })
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {openDialog.category === 'detail'
                          ? 'Article Detail'
                          : 'Delete Article'}
                      </Dialog.Title>
                      {openDialog.category === 'delete' && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to delete this article?
                          </p>
                        </div>
                      )}
                      {openDialog.category === 'detail' && data && !error && (
                        <div className="mt-2">
                          <h4 className="text-base text-gray-700">Title</h4>
                          <p className="text-sm text-gray-500">{data.title}</p>
                          <h4 className="text-base text-gray-700 mt-6">Type</h4>
                          <p className="text-sm text-gray-500">{data.type}</p>
                          <h4 className="text-base text-gray-700 mt-6">URL</h4>
                          <p className="text-sm text-gray-500">{data.url}</p>
                          <h4 className="text-base text-gray-700 mt-6">
                            Content
                          </h4>
                          <p className="text-sm text-gray-500">
                            {data.content}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  {openDialog.category === 'delete' && (
                    <button
                      type="button"
                      disabled={loading}
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => deleteArticle(openDialog.id)}
                    >
                      {loading ? 'Loading..' : 'Delete'}
                    </button>
                  )}

                  <button
                    type="button"
                    disabled={loading}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => {
                      setOpen({
                        category: '',
                        isOpen: false,
                        id: -1,
                      })
                    }}
                    ref={closeButtonRef}
                  >
                    {openDialog.category === 'delete' ? 'Cancel' : 'Close'}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default PopupDialog
