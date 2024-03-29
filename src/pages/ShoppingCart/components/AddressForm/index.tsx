import { MapPinLine } from 'phosphor-react'
import cep from 'cep-promise'
import { FormEvent, useState } from 'react'
import { useFormContext } from 'react-hook-form'
//@ts-ignore
import { mask, unMask } from 'remask'
import {
  Container,
  ContentForm,
  RowInputForm,
  ShortInput,
  BaseInput,
} from './styles'

export function AddressForm() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext()
  const cepMask = watch('zipCode')

  function handleChangeMask(e: FormEvent<HTMLInputElement>) {
    const cepValue = unMask((e.target as HTMLInputElement).value)

    const maskValue = mask(cepValue, ['99999-999'])
    setValue('zipCode', maskValue)
  }

  async function onBlurCep(e: FormEvent<HTMLInputElement>) {
    const value = (e.target as HTMLInputElement).value

    const replaceCep = value.replace(/[^0-9]/g, '')

    if (replaceCep?.length !== 8) {
      return
    } else {
      cep(replaceCep).then(res => {
        setValue('neighborhood', res.neighborhood)
        setValue('city', res.city)
        setValue('street', res.street)
        setValue('state', res.state)
      })
    }
  }

  return (
    <Container>
      <header>
        <MapPinLine />
        <div>
          <h5>Endereço de entrega</h5>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </header>
      <ContentForm>
        <div className="contentErrorInput">
          <ShortInput
            placeholder="CEP"
            value={cepMask}
            {...(register('zipCode'),
            {
              onBlur: onBlurCep,
              onChange: handleChangeMask,
            })}
            isError={errors.zipCode ? 'error' : 'success'}
          />
          {/* @ts-ignore */}
          {errors.zipCode?.message && <span>{errors.zipCode?.message}</span>}
        </div>
        <div className="contentErrorInput">
          <BaseInput
            {...register('street')}
            placeholder="Rua"
            isError={errors.street ? 'error' : 'success'}
          />
          {/* @ts-ignore */}
          {errors.street?.message && <span>{errors.street?.message}</span>}
        </div>
        <RowInputForm>
          <div className="contentErrorInput">
            <ShortInput
              {...register('number')}
              type="number"
              placeholder="Número"
              isError={errors.number ? 'error' : 'success'}
            />
            {/* @ts-ignore */}
            {errors.number?.message && <span>{errors.number?.message}</span>}
          </div>
          <div className="contentOptional">
            <BaseInput
              suffix
              {...register('complement')}
              placeholder="Complemento"
              isError={errors.complement ? 'error' : 'success'}
            />
            <i>Opcional</i>
          </div>
        </RowInputForm>
        <RowInputForm>
          <div className="contentErrorInput">
            <ShortInput
              {...register('neighborhood')}
              placeholder="Bairro"
              isError={errors.neighborhood ? 'error' : 'success'}
            />
            {errors.neighborhood?.message && (
              // @ts-ignore
              <span>{errors.neighborhood?.message}</span>
            )}
          </div>
          <div className="contentCityAndUf">
            <div className="contentErrorInput" style={{ width: '100%' }}>
              <BaseInput
                {...register('city')}
                placeholder="Cidade"
                isError={errors.city ? 'error' : 'success'}
              />
              {/* @ts-ignore */}
              {errors.city?.message && <span>{errors.city?.message}</span>}
            </div>
            <div className="contentErrorInput ufContent">
              <ShortInput
                {...register('state')}
                placeholder="UF"
                className="ufInput"
                isError={errors.state ? 'error' : 'success'}
              />
              {errors.state?.message && (
                // @ts-ignore
                <span>{errors.state?.message}</span>
              )}
            </div>
          </div>
        </RowInputForm>
      </ContentForm>
    </Container>
  )
}
