export default function({ $axios, redirect }) {
  // $axios.onRequest(config => {
  //   config.headers.common["Authorization"] = "Bearer keyKlgrRtzhSKW3nC";
  // });

  $axios.onError(error => {
    if (error.response.status === 500) {
      redirect("/sorry");
    }
  });
}
