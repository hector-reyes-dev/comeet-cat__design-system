import React, { Component } from "react";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { SocialMediaContainer, CardColaborator } from "./styles";

class ColaboratorCard extends Component {
  render() {
    return (
      <CardColaborator>
        <h4>{this.props.title}</h4>
        <h2>{this.props.name}</h2>
        <SocialMediaContainer>
          <a target="__blank" href={this.props.urlGithub}>
            <AiFillGithub color="white" size="2.4em" />
          </a>
          <a target="__blank" href={this.props.urlInstagram}>
            <AiOutlineInstagram color="white" size="2.5em" />
          </a>
        </SocialMediaContainer>
      </CardColaborator>
    );
  }
}

export default ColaboratorCard;
