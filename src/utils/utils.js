import { supabaseAdmin } from "./supabase-config";

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getRandomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
export async function upImage(file) {
  const timestamp = Date.now();
  const randomString = getRandomString(3);
  const fileExtension = file.name.split(".").pop();
  const fileName = `image_${randomString}${timestamp}.${fileExtension}`;
  const { data } = await supabaseAdmin.storage
    .from("post_images")
    .upload(`avatar/${fileName}`, file, {
      upsert: false,
    });
  return fileName;
}

export async function upImagePublic(file) {
  const timestamp = Date.now();
  const randomString = getRandomString(3);
  const fileExtension = file.name.split(".").pop();
  const fileName = `image_${randomString}${timestamp}.${fileExtension}`;
  const { data } = await supabaseAdmin.storage
    .from("post_images")
    .upload(`public/${fileName}`, file, {
      upsert: false,
    });
  return fileName;
}
