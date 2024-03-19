import { DefaultImg, Section } from '@/components'
import s from './baner-section.module.scss'
export const BanerSection = () => {
  return (
    <Section className={s.root}>
      <div className={s.container}>
        <DefaultImg
          borderRadius={'4px'}
          backgroundColor={'#E3E3E3'}
          height={'220px'}
          width={'100%'}
        />
      </div>
    </Section>
  )
}
