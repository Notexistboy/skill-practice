import vdo from './4.Singleton'

const MyVideo = Object.getPrototypeOf(vdo).constructor
const v2 = new MyVideo()
