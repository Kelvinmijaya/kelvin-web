type DialogDetail = {
  category: string
  isOpen: boolean
  id: number
}

type PopupDialogProps = {
  mutate: any
  openDialog: DialogDetail
  setOpen: (arg0: DialogDetail) => void
}

export type {PopupDialogProps, DialogDetail}
