import { apiPost, Auth } from './apiFetch';

export default (auth: Auth) =>
  apiPost(
    auth,
    'register',
    {
      apply_markdown: true,
    }
  );
