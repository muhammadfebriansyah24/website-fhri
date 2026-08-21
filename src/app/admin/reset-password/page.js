import ResetPasswordClient from './ResetPasswordClient';

export default async function ResetPasswordPage(props) {
  const searchParams = await props.searchParams;
  const token = searchParams?.token || '';
  return <ResetPasswordClient token={token} />;
}
