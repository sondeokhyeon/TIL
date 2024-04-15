import { render, screen } from '@testing-library/react'
import { Heading, TextBox } from '../components/GetByRole'

test('Get Heading', () => {
    render(<Heading/>)
    // Role을 통해서 Element를 찾는다 
    // 중복된 경우 옵션을 통해서 구분이 가능하다
    const titleEl1 = screen.getByRole('heading', {level: 1})
    const titleEl2 = screen.getByRole('heading', {level: 2})
    expect(titleEl1).toBeInTheDocument()
    expect(titleEl2).toBeInTheDocument()
})

test('Get TextBox', () => {
    render(<TextBox/>)
    const input1 = screen.getByRole('textbox', {
        name : 'name'
    })
    expect(input1).toBeInTheDocument()

    // value를 통해서도 element를 찾는게 가능하다. 
    const inputValue = screen.getByDisplayValue('tom')
    expect(inputValue).toBeInTheDocument()

    // label를 통해서도 element를 찾는게 가능하다.
    const input2 = screen.getByLabelText('profile')
    expect(input2).toBeInTheDocument()
})