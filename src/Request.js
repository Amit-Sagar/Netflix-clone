const key="0cf02e9224cb74ac184f564fe6273c23";

const request={
    requestLatest:`https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=en-US&page=1`,
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestHorror:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
}

export default request;