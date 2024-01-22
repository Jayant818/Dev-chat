## Using WebHooks to sync the clerk and MongoDB Data

- Hum clerk use kar rahe hai apne user ke authentication k liye but ye baat mongodb ko kaise pata lagegi ki naya user nai signup kiya hai ya user nai apna profile update kiya hai kyoki user nai wo sab to clerk mai kiya hai
- Ishi cheez ko tackle karne k liye we use _`WebHooks`_

_WebHooks kya hai_ - Using the webhooks ek app dusre app se bate kar sakta hai, using webhooks apps hai wo real time pe communicate kar sakti hai using webhook ham ek automated message bhej sakte hai ek app se dusre app ko jab ek particular event occur hua ho

![Alt text](image.png)

- For Ex - Hame stripe use kar rahe hai for payment reciving in our app, orr ab hum kya cahate hai ki jaise hi user pay kare wo premium content ko access kar sake , uska ek simple ka solution kya ho sakta hai hum stripe pe continously check karte rahe ki koi naya user to nhi bana hai , same in the case of alertify - hum new email k liye ek fixed time k baad ek call kar rahe the . _`Other Solution` - _ Hum stripe ko keh de ki bhai jab bhi nayi payment ho to data yaha bhej diyo.
- iske liye webhook banaya gaya hai, stripe k webhook ka use kar k hum data le sakte hai , orr jo webhook hoga wo ek event pe trigger hoga or ek client endpoint uspe data bhejega
- Hamare case mai hum ishe clerk or MongoDB mai use kar rahe hai

https://clerk.com/docs/users/sync-data#sync-clerk-data-to-your-backend-with-webhooks

![Alt text](image-1.png)

---

### Clerk - https://clerk.com/docs/references/nextjs/auth-middleware

---

## Building Community Page

- Build The UI , uske baad server action banao [ Db se connect karo data thao or return karo]
- line-clamp-1

## Learnings
