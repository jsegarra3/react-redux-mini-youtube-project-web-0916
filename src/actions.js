import axios from 'axios'
const API_KEY = 'AIzaSyDJBjY4UqxuyyIDEFcAsBCwfyJcoz5Eixw'
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'

export function fetchVideos(searchTerm){
  const videos = axios.get(`${ROOT_URL}?q=${searchTerm}&part=snippet&key=${API_KEY}`)
  return {
    type: "FETCH_VIDEOS",
    payload: videos
  }
}

export function setSearchTerm(term){
  return {
    type: 'SET_SEARCH_TERM',
    payload: term
  }
}
