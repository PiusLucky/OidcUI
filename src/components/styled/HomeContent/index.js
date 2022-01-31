import React from "react";
import { StyledArticleSection } from "./index.styled";
import IllustrationGrowTogether from "../../svgs/IllustrationGrowTogether";
import { StyledButton } from "../Button/Button.styled";
import { useAuth } from 'oidc-react';
import { Link } from "react-router-dom";

function Article() {
  const auth = useAuth();
  return (
    <StyledArticleSection>
      <article>
        <IllustrationGrowTogether />
        <div>
          <h3>Now that You're Authenticated</h3>
          <p>
            Hello <strong>{auth?.userData?.profile?.display_name}</strong>
          </p>
          <div>
            <Link to="/profile"><StyledButton>View Profile</StyledButton></Link>
          </div>
        </div>
      </article>
      <div className="cta">
        <h2>More Information about Myself?</h2>
          <Link to="/profile"><StyledButton>Check Profile</StyledButton></Link>
      </div>
    </StyledArticleSection>
  );
}

export default Article;
