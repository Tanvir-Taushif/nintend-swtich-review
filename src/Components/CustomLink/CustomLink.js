import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './CustomLinks.css';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link className='custom-link'
          style={{ textDecoration: match ? "underline" : "none",
                   color:match?"#242582":"black"}}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

export default CustomLink;