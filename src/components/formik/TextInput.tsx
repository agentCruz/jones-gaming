import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    InputProps,
} from '@chakra-ui/react';
import { useField } from 'formik';

type Props = {
    label: string;
    name: string;
    placeholder?: string;
    autoFocus?: boolean;
    className?: string;
    style?: InputProps;
};

export const TextInputUi: React.FC<Props> = ({ label, style, ...props }) => {
    const [field, meta] = useField(props);

    // @ts-ignore
    const id = props.id;

    // @ts-ignore
    const name = props.name;

    const validationColor = !meta.touched
        ? 'white'
        : meta.error && meta.touched
            ? 'red'
            : 'white';

    return (
        <FormControl isInvalid={!!meta.error && meta.touched}>
            <FormLabel
                fontWeight={'600'}
                textTransform={'capitalize'}
                htmlFor={id}
            // textColor={bioMedGrey}
            >
                {label}
            </FormLabel>
            <Input
                id={id}
                {...style}
                _border={'0.5px solid #7B7B7B'}
                w={style?.width || '400px'}
                // bg={bioMedLightGreyBg}
                type="text"
                {...field}
                borderRadius={'5px'}
                outline="none"
                _placeholder={{
                    textTransform: 'capitalize',
                    // color: bioMedGrey,
                }}
                // textColor={'black'}
                _focus={{ borderColor: validationColor }}
                borderColor={validationColor}
            />
            {meta.touched && <FormErrorMessage>{meta.error}</FormErrorMessage>}
        </FormControl>
    );
};

TextInputUi.displayName = 'TextInputUi';
