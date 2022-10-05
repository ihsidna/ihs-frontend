// todo: uncomment before a pull request

// import React, {useEffect} from 'react'
// import { useLocation } from 'react-router-dom'
// import { useDetectAdBlock } from 'adblock-detect-react'
//
//
// import * as analytics from '../data/ga4'
//
// export function useAnalytics() {
// 	const location = useLocation()
// 	const path = location.pathname + location.search
//
// 	const adBlockDetected = useDetectAdBlock()
//
// 	useEffect(() => {
// 		if(!adBlockDetected) analytics.init()
// 	}, [])
//
// 	useEffect(() => {
// 		if (!adBlockDetected) {
// 			analytics.sendPageview(path)
// 		}
// 	}, [adBlockDetected, path]);
//
// }

// export default useAnalytics