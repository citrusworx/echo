import { WPSync } from "./wp/wp-sync.js";
import dotenv from "dotenv";
const wp = new WPSync();
dotenv.config();


const posts = await wp.get_published_posts(`${process.env.WP_POSTS}`);
console.log(posts)
