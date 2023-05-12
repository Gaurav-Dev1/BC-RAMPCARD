import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Image from '.'
import AwsImg from '../../../assets/images/aws.svg'

describe('Image component unit test for positive and negative cases', () => {
  it('positive scenario for getting image', () => {
    render(<Image src={AwsImg} />)
    expect(screen.getByTestId('image')).toBeInTheDocument()
  })

  it('negative test for image when non-existent image is provided', () => {
    render(
      <Image src="/nonexistent-image.jpg" alt="Fallback Alt Text" />
    )
    const altTextElement = screen.getByAltText('Fallback Alt Text')
    expect(altTextElement).toBeInTheDocument()
  })
})
