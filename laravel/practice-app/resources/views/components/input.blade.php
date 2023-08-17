<div class="form-group">
    <label for="">{{ $label }}</label>
    <input type="{{ $type }}" name="{{ $name }}" value="{{ old($name) }}" class="form-control"
        aria-describedby="helpId">
    @error("$name")
        <small id="helpId" class="text-muted">{{ $message }}</small>
    @enderror
</div>
