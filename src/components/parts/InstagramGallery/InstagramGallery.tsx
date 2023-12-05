import { getInstagramPosts } from "@/libs/instagram"
import { InstagramPost } from "@/types/common"
import React, { Suspense } from "react"

const NUM_OF_POST = 12

export const InstagramGallery = async () => {
  const instagramData: InstagramPost[] = await getInstagramPosts()
  let count = 0

  return (
    <div className="md:px-4 px-0">
      <ul className="flex flex-wrap justify-between">
        <Suspense>
          {instagramData.map((postData, idx) => {
            if (count < NUM_OF_POST && postData.media_url) {
              count++

              return (
                <li className="w-1/2 transition-opacity duration-300 hover:opacity-80 md:w-1/4" key={postData.id}>
                  <a href={postData.permalink} target="_blank" rel="noopener noreferrer">
                    <div className="w-full">
                      {postData.media_type == "VIDEO" ? (
                        <div className="relative h-0 w-full overflow-hidden pt-[100%]">
                          <video className="absolute left-0 right-0 top-0 bottom-0 block h-full w-full  object-cover" src={postData.media_url}></video>
                        </div>
                      ) : (
                        <div className="relative h-0 w-full overflow-hidden pt-[100%]">
                          <img loading="lazy" className=" absolute left-0 right-0 top-0 bottom-0 block h-full w-full object-cover" src={postData.media_url} alt={postData.caption} />
                        </div>
                      )}
                    </div>
                  </a>
                </li>
              )
            }
          })}
        </Suspense>
      </ul>
    </div>
  )
}
