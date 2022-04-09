import React from "react";

export function LoginUser(props: {
  onSubmit: (e: any) => void;
  onChange: (e: any) => void;
}) {
  return (
    <form className="home__login" onSubmit={props.onSubmit}>
      <span className="login__desc">Cześć, jak mam Cię zapamiętać?</span>
      <input className="login__input" type="text" onChange={props.onChange} />
    </form>
  );
}
