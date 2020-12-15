import * as React from "react";
import { navigate } from "gatsby";

// Components
import { Button } from "./Button";

export function ContactBtn() {
  const navigateToContact = () => navigate("/contact");

  return <Button onClick={navigateToContact}>contact me</Button>;
}
