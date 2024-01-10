export interface AddRequestBody {
    title: string // 할 일 제목 (필수!)
    order?: number // 할 일 순서
}
//추가

export interface EditRequestBody {
    title: string // 할 일 제목 (필수!)
    done: boolean // 할 일 완료 여부 (필수!)
    order?: number // 할 일 순서
}
//수정