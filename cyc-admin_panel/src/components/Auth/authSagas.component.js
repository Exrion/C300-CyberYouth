// const queryToObject = queryString => {
//     const pairsString =
//       queryString[0] === '?' ? queryString.slice(1) : queryString
//     const pairs = pairsString
//       .split('&')
//       .map(str => str.split('=').map(decodeURIComponent))
//     return pairs.reduce((acc, [key, value]) => {
//       if (key) {
//         acc[key] = value
//       }

//       return acc
//     }, {})
//   }

//   export function* processOAuthParams() {
//     const queryString = window.location.search
//     history.push(PATH.TIME_PICKER)

//     if (queryString) {
//       const { code, linkedin: lowLinkedin } = queryToObject(queryString)
//       const linkedin = lowLinkedin && LINKEDIN[linkedin.toUpperCase()]
//       if (linkedin) {
//         try {
//           const query = IDENTIFY_WITH_OAUTH_QUERY(
//             linkedin,
//             code,
//             getRedirectUri(provider),
//             offsetedUtils.getOffset()
//           )
//           const { identifyWithOAuth } = yield callApi(query)
//           yield put(receiveAuthData(identifyWithOAuth))
//           if (identifyWithOAuth.firstIdentification) {
//             yield put(showAfterSignUpModal())
//             getAnalytics().finishSignUp()
//           }
//           yield* synchronize()
//         } catch (err) {
//           yield put(failToProcessOAuthParams())
//           reportError('Fail to Authorize', err)
//         }
//       }
//     }
//   }
