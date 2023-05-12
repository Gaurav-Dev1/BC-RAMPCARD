import type { Meta, StoryObj } from '@storybook/react'
import Image from '.'
import Illustation from '../../../assets/images/illustration.svg'
import AwsImg from '../../../assets/images/aws.svg'

const meta: Meta<typeof Image> = {
  title: 'Atoms/Image',
  component: Image,
}

export default meta
type Story = StoryObj<typeof Image>

export const Illustration: Story = {
  args: {
    src: Illustation,
  },
}

export const Aws: Story = {
  args: {
    src: AwsImg,
  },
}
