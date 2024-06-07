export const formatDate = (date: string | number | undefined) => {
    return date ? new Date(date).toDateString() : '';
  }