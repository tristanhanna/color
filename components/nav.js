import Link from 'next/link'

const linkStyle = {
    color:"#511427"
}

const navStyle = {
    display:"flex",
    flexDirection: "horizontal",
    justifyContent: "space-around",
    textAlign: "center",
    marginRight:"200px",
    marginLeft: "200px"
}

export default function Nav() {
  return (
    <div style={navStyle}>
      <Link href="/">
        <a className="card" style={linkStyle}>Home</a>
      </Link>
      <Link href="/index16">
        <a className="card" style={linkStyle}>16x16 Pixel Board</a>
      </Link>
      <Link href="https://www.w3schools.com/colors/colors_names.asp">
        <a className="card" style={linkStyle}>Web-Safe Colors</a>
      </Link>
      <style jsx>{`
        .card {
          padding: 1rem;
          text-decoration: none;
          border-radius: 8px;
            color: #511427;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
      `}</style>
    </div>
  )
}


