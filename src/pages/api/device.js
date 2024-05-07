// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import requestIp from 'request-ip'
import parser from 'ua-parser-js'
export default function handler(req, res) {
  
  const ua = parser(req.headers['user-agent'])
  const ip = requestIp.getClientIp(req)

  res.status(200).json({
    ua,
    ip
  });
}
