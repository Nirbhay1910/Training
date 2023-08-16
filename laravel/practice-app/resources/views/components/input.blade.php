<label>{{ $label }}</label>
<input type="{{ $type }}" name="{{ $name }}" value={{ old($name) }}>
@error("$name")
    {{ $message }}
@enderror
