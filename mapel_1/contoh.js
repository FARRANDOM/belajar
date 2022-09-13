async function aye() {
  var user = 'mama';
  var pass = 3131;
  const app = await dat(user, pass);
  return app;
}

async function dat(user, pass) {
  try {
    if (user === 'mama' && pass === 3131) {
      console.log("berhasil");
    } else {
      console.log("salah");
    }
  } catch (err) {
    console.log("apalah");
  }
}
