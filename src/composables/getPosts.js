// import { db } from "@/firebase/config";
// import { ref } from "vue";

// let getPosts = () => {
//   let posts = ref([]);
//   let error = ref("");
//   let load = async() => {
//       try{
//         let res = await db.collection("posts").get();
//         posts.value = res.docs.map((doc) => {
//           return {id:doc.id,...doc.data()}
//           console.log();
//         })
//       } catch(err) {
//         console.log(err);
//       }
//   }
//   return {posts, error, load};
// }


// export default getPosts;




import { ref } from "vue";
let getPosts=()=>{
    let posts=ref([]);
      let error=ref("");
      let load=async()=>{
         try{
            // await new Promise((resolve,reject)=>{
            //    // resolve();
            //    setTimeout(resolve,2000)
            // })
           let response= await fetch("http://localhost:3000/posts")
           if(response.status===404){
             throw new Error("not found url");
           }
            let datas=await response.json()
            posts.value=datas
         }catch(err){
            // console.log(error.message)
            error.value=err.message;
         }
      }
      return {posts,error,load};
}
export default getPosts;