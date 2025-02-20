# 💌 Mobile Wedding Invitation 💌

![demo1.gif](demo1.gif)

This project is a mobile invitation.

It is developed based on React and Typescript, and provides a fast and easy development environment using Vite.

Eslint and prettier were applied, and emotion/styled was used for styling.

The gallery used react-photoswipe-gallery, and the map used react-naver-maps.

![demo2.gif](demo2.gif)

I added a cute confetti function using js-confetti.

## How to install and run the project

1. Clone the repository.
```
git clone https://github.com/your-username/mobile-wedding-invitation.git
```
2. Move to the project folder. ```
cd mobile-wedding-invitation
```
3. Install the required dependencies.

```
npm install
```
4. (Required) Rename the `.env.sample` file to `.env`, and fill in VITE_APP_NAVERMAPS_CLIENT_ID with the `client_id` issued by Naver Cloud. You can obtain the `client_id` after registering the application in [NAVER CLOUD PLATFORM](https://console.ncloud.com/naver-service/application).
5. (Optional) If you want to use the likes and guestbook features, you need to set up Firebase. Set up the Firebase SDK in the src/firebase.ts file. You can set up the SDK by referring to the [Firebase](https://firebase.google.com/docs/web/setup?hl=ko) document.
6. Modify the files that require customization. (See the checklist below)
7. Run the application.
```
npm run dev
```

## Custom checklist

- [ ] `src/data.json` Modify the information to be included in the invitation.
- [ ] `index.html` Modify the meta tags to be used in the favicon, title, and og tags.
- [ ] `public/thumbnail.jpg` Modify the thumbnail photo.
- [ ] `assets/images` Insert the photos to be included in the gallery and import them in `src/layout/Gallery/Images.ts`. Modify the size to fit the photo here.
- [ ] `.env` VITE_APP_NAVERMAPS_CLIENT_ID=client_id is required.
- [ ] (Optional) `src/firebase.ts` If you use likes and guestbook, you need to set up the firebase sdk. - [ ] (Optional) When writing the host account number in `src/data.json`, you can add Kakao Pay or Toss links using the `kakaopayAccount` and `tossAccount` items.

## Deploy immediately after clone

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fheejin-hwang%2Fmobile-wedding-invitation)

## References

- Developer: [heejin-hwang](https://github.com/heejin-hwang)
- react-photoswipe-gallery library: [react-photoswipe-gallery](https://www.npmjs.com/package/react-photoswipe-gallery)
- react-naver-maps official documentation: [react-naver-maps](https://zeakd.github.io/react-naver-maps/)
- Naver Cloud Platform: [NAVER CLOUD PLATFORM](https://console.ncloud.com/naver-service/application)
- Kakao Developers: https://developers.kakao.com/
- Create a Toss ID: https://toss.me/

This project is distributed under the MIT License. For more information, see the LICENSE file.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=heejin-hwang/mobile-wedding-invitation&type=Date)](https://star-history.com/#heejin-hwang/mobile-wedding-invitation&Date)