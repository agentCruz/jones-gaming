import { FaSearch } from 'react-icons/fa';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { ChangeEventHandler } from 'react';

type Props = {
    placeholder?: string | undefined;
    value?: string | number | readonly string[] | undefined;
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

const SearchUi: React.FC<Props> = ({ placeholder, value, onChange }) => {
    return (
        <InputGroup
            maxWidth={'400px'}
            // bg={bioMedGreyBg}
            borderRadius={'36px'}
            height={'45px'}
            justifyItems={'center'}
        >
            <InputLeftElement pointerEvents="none">
                <FaSearch  />
            </InputLeftElement>
            <Input
                value={value}
                onChange={onChange}
                outline="none"
                variant="unstyled"
                placeholder={placeholder}
                _placeholder={{
                    textTransform: 'capitalize',
                }}
            />
        </InputGroup>
    );
};
export default SearchUi;
