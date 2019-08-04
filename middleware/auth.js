export default function ({redirect}) {
  console.log('Trigger auth middleware');

  return redirect({
    name: 'users-login'
  })
}
