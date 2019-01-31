export function openModal(address, modalConfig) {
  return {
    type: 'open_modal',
    address, // string or callback
    modalConfig
  }
}

export function closeModal(address) {
  return {
    type: 'close_modal',
    address
  }
}

export function closeAllModals() {
  return { type: 'close_all_modals' }
}

export default { openModal, closeModal, closeAllModals }
