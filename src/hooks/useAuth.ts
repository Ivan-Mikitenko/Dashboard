import { useSelector } from 'react-redux';

export function useAuth() {
	const { email, token, id } = useSelector(state => state.authorization);

	return { isAuth: !!email, email, token, id };
}
