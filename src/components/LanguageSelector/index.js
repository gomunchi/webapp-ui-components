import React from 'react'
import { LanguageSelector as LanguageSelectorController } from 'ordering-components-external'
import { Select } from '../../styles/Select'

const LanguageSelectorUI = (props) => {
  const {
    languagesState,
    currentLanguage,
    handleChangeLanguage,
    notReload,
    defaultLanguages,
    defaultCurrentLanguage
  } = props
  const _languages = languagesState?.languages?.map(language => {
    return {
      value: language?.code, content: language?.name, showOnSelected: language.code?.toUpperCase()
    }
  })
  _languages && _languages.sort((a, b) =>
    (a.content > b.content) ? 1 : ((b.content > a.content) ? -1 : 0)
  )
  return (
    _languages && _languages.length > 1 ? (
      <Select
        zIndex={10002}
        options={languagesState?.loading ? defaultLanguages : _languages}
        defaultValue={languagesState?.loading ? defaultCurrentLanguage : currentLanguage}
        onChange={(languageId) => handleChangeLanguage(languageId)}
        notReload={notReload}
      />
    ) : null
  )
}

export const LanguageSelector = (props) => {
  const DefaultChangeLanguage = () => {}
  const langProps = {
    ...props,
    UIComponent: LanguageSelectorUI,
    onChangeLanguage: props.onChangeLanguage || DefaultChangeLanguage,
    defaultLanguages: [{
      content: 'English',
      showOnSelected: 'EN',
      value: 'en'
    }],
    defaultCurrentLanguage: 'en'
  }
  return (
    <LanguageSelectorController {...langProps} />
  )
}
