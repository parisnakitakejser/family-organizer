export default function ({redirect, app, route}) {
  console.log('Trigger systemStatusVerify middleware');

  return app.$axios.get(process.env.API_SERVER + 'system/status-verify').then((reponse) => {
    const reps = reponse.data;
    if (!reps.status) {
      return redirect({
        name: 'system-configuration'
      })
    } else {
      if (route.name.includes(['system-configuration'])) {
        return redirect({
          name: 'users-login'
        })
      }
    }
  });
}
