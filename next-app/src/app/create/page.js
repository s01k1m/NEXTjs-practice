"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();
  return (
    // 클라이언트와 소통한다
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("F");
        const title = event.target.title.value;
        const body = event.target.body.value;
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };
        // 보안때문에 NEXT_PUBLIC_  필수
        fetch(process.env.NEXT_PUBLIC_API_URL + `topics`, options)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const lastid = result.id;
            router.push(`/read/${lastid}`);
            router.refresh();
          });
      }}
    >
      <input type="text" name="title" placeholder="title"></input>
      <br />
      <textarea name="body" placehoder="body"></textarea>
      <input type="submit" value="create"></input>
    </form>
  );
}
