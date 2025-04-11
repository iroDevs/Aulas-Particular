import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const DataSchema = z.object({
    nome: z.string().min(4, "Nome é muito curto").max(100, "Nome muito longo"),
    idade: z.coerce.number().min(0, "Idade inválida").max(150, "Idade inválida")
})

type FormData = z.infer<typeof DataSchema>;

interface FormularioProps {
    title: string;
}

export default function Formulario({ title }: FormularioProps) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({

    resolver: zodResolver(DataSchema)
});


    function onSubmit(data: FormData) {
        console.log(data);
    }
    const nome = watch('nome');

    return (
        <>
        <h1>{title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nome: ({nome})</label><br></br>
            <input {...register('nome')} type="text" />
            {errors.nome && <span style={{color: 'red'}}>{errors.nome.message}</span>}
            <label>Idade</label>
            <input {...register('idade')} id="idade" type="number" />
            {errors.idade && <span style={{color: 'red'}}>{errors.idade.message}</span>}

            <button type="submit">Enviar</button>
        </form>
        </>
    )
}