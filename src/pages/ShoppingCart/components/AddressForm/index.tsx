import { MapPinLine } from "phosphor-react"
import cep from "cep-promise"
import { FormEvent, useState } from "react"
import { useFormContext } from "react-hook-form"
//@ts-ignore
import { mask, unMask } from "remask"
import {
  Container,
  ContentForm,
  RowInputForm,
  ShortInput,
  BaseInput,
} from "./styles"

export function AddressForm() {
  const { register, setValue, watch } = useFormContext()
  const cepMask = watch("zipCode")

  function handleChangeMask(e: FormEvent<HTMLInputElement>) {
    const cepValue = unMask((e.target as HTMLInputElement).value)

    const maskValue = mask(cepValue, ["99999-999"])
    setValue("zipCode", maskValue)
  }

  async function onBlurCep(e: FormEvent<HTMLInputElement>) {
    const value = (e.target as HTMLInputElement).value

    const replaceCep = value.replace(/[^0-9]/g, "")

    if (replaceCep?.length !== 8) {
      return
    } else {
      cep(replaceCep).then(res => {
        setValue("neighborhood", res.neighborhood)
        setValue("city", res.city)
        setValue("street", res.street)
        setValue("state", res.state)
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
        <ShortInput
          placeholder="CEP"
          value={cepMask}
          {...(register("zipCode"),
          {
            onBlur: onBlurCep,
            onChange: handleChangeMask,
          })}
        />
        <BaseInput {...register("street")} placeholder="Rua" />
        <RowInputForm>
          <ShortInput {...register("number")} placeholder="Número" />
          <BaseInput
            suffix
            {...register("complement")}
            placeholder="Complemento"
          />
          <i>Opcional</i>
        </RowInputForm>
        <RowInputForm>
          <ShortInput {...register("neighborhood")} placeholder="Bairro" />
          <BaseInput {...register("city")} placeholder="Cidade" />
          <ShortInput
            {...register("state")}
            placeholder="UF"
            className="ufInput"
          />
        </RowInputForm>
      </ContentForm>
    </Container>
  )
}
