import user from '../api/user'

export const fetchMember = (context, { successCb, errorCb }) => {
    user.fetchMember((member) => {
        context.commit('FETCH_MEMBER', member)
    }, successCb, errorCb)
}
