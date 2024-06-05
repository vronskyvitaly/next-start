import { DefaultImg, Section } from '@/components'
import s from './baner-section.module.scss'
export const BannerSection = () => {
  return (
    <Section className={s.root}>
      <div className={s.container}>
        <DefaultImg
          borderRadius={'4px'}
          backgroundColor={'#E3E3E3'}
          height={'220px'}
          width={'100%'}
          defaultImgTitle={
            'There will be a banner with frequently selected cards by the user ⚒️'
          }
        />
      </div>
    </Section>
  )
}
