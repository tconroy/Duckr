export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Tom Conroy',
        avatar: 'placehold.it/150',
        uid: 'tomconroy',
      })
    }, 2000)
  })
}
