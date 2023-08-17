<!doctype html>
<html lang="en">

<head>
    <title>Customers</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    {{-- <button><a class="btn btn-primary d-inline-block m-2 float-right" href="/customer">Add</a></button> --}}
    {{-- OR --}}
    <a href="{{ route('customer.create') }}"> <button class="btn btn-primary m-2 float-right">Add</button></a>
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>State</th>
                <th>Address</th>
                <th>Gender</th>
                <th>dob</th>
                <th>status</th>
                <th></th>

            </tr>
        </thead>
        <tbody>
            @foreach ($customers as $customer)
                <tr>
                    <td scope="row">{{ $customer->name }}</td>
                    <td>{{ $customer->email }}</td>
                    <td>{{ $customer->country }}</td>
                    <td>{{ $customer->state }}</td>
                    <td>{{ $customer->address }}</td>
                    <td>
                        @if ($customer->gender == 'M')
                            Male
                        @elseif($customer->gender == 'F')
                            Female
                        @else
                            Other
                        @endif
                    </td>
                    <td>{{ $customer->dob }}</td>
                    <td>
                        @if ($customer->status == 1)
                            Active
                        @else
                            Inactive
                        @endif
                    </td>
                    <td>
                        <a href="{{ route('customer.delete', ['id' => $customer->customer_id]) }}"><button
                                class="btn btn-danger">Delete</button></a>
                        <a href="{{ route('customer.edit', ['id' => $customer->customer_id]) }}"><button
                                class="btn btn-primary">Edit</button></a>

                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
</body>

</html>
