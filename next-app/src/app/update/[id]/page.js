"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function Update() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    fetch(`http://localhost:9999/topics/${id}`)
      .then((resp) => resp.json())
      .then((result) => {
        setTitle(result.title);
        setBody(result.body);
      });
  }, []);
  return (
    // 클라이언트와 소통한다
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        const options = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };
        fetch(process.env.NEXT_PUBLIC_API_URL + `topics/` + id, options)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const lastid = result.id;
            router.refresh();
            router.push(`/read/${lastid}`);
          });
      }}
    >
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        name="title"
        placeholder="title"
        value={title}
      ></input>
      <br />
      <textarea
        onChange={(e) => setBody(e.target.value)}
        name="body"
        placehoder="body"
        value={body}
      ></textarea>
      <input type="submit" value="create"></input>
    </form>
  );
}
