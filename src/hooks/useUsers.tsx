
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} from '../services/userService'
import { User } from '../types/userType'

export function useUsers() {
    return useQuery<User[], Error>({
        queryKey: ['users'],
        queryFn: getUsers,
    })
}

export function useUser(id: string) {
    return useQuery<User, Error>({
        queryKey: ['user', id],
        queryFn: () => getUser(id),
        enabled: !!id,
    })
}

export function useCreateUser() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] })
        },
    })
}

export function useUpdateUser() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: any }) => updateUser(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] })
        },
    })
}

export function useDeleteUser() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] })
        },
    })
}
