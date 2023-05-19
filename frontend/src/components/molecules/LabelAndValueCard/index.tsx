import { Grid } from '@mui/material'
import Typography from '../../atoms/Typography'

interface LabelAndValueCardProps {
  label: string
  value: string
  labelColor: string
  valueColor: string
  labelVariant:
    | 'h1'
    | 'h2'
    | 'subtitle1'
    | 'subtitle2'
    | 'subtitle3'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'caption1'
    | 'caption2'
    | undefined
  valueVariant:
    | 'h1'
    | 'h2'
    | 'subtitle1'
    | 'subtitle2'
    | 'subtitle3'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'caption1'
    | 'caption2'
    | undefined
}

const LabelAndValueCard = (props: LabelAndValueCardProps) => {
  const { label, value, labelColor, valueColor, labelVariant, valueVariant } =
    props
  return (
    <Grid container gap={'5px'}>
      <Grid item>
        <Typography variant={labelVariant} color={labelColor}>
          {label}
        </Typography>
        <Typography variant={valueVariant} color={valueColor}>
          {value}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default LabelAndValueCard
