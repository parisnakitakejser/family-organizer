export default function ({redirect, app}) {
  console.log('Trigger systemStatusVerify middleware');

  return app.$axios.get('/api/system/status-verify').then((reponse) => {
    const reps = reponse.data;
    if (!reps.status) {
      return redirect({
        name: 'system-configuration'
      })
    }
  });
}
