export default function checkEnvironment(): string {
  const envUrl = 'https://demo-trello-zbzm2.ondigitalocean.app';
  // 'http://localhost:3000';
  // process.env.NODE_ENV === 'development'
  //   ? 'http://localhost:3000'
  //   : 'https://trello-clone-one.vercel.app';

  return envUrl;
}
