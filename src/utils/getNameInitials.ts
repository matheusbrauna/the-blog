export function getNameInitials(fullName: string): string {
  const splittedName = fullName.split(' ')

  if (splittedName.length < 2) {
    throw new Error(
      'O nome completo deve ter pelo menos um nome e um sobrenome.',
    )
  }

  const nameInitial = splittedName[0][0].toUpperCase()
  const nickNameInitial = splittedName[splittedName.length - 1][0].toUpperCase()

  return `${nameInitial}${nickNameInitial}`
}
